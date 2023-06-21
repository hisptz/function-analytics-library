import { Fn } from '@iapps/function-analytics'

Fn.init({
    baseUrl: 'api_url_to_dhis_server',
    username: 'username',
    password: 'password'
});


new Fn.Analytics()
  .setData('dx')
  .setOrgUnit('ou')
  .setPeriod('pe')
  .setVariables('')
  .postProcess(function(analyticsResult) {
    // This adds post processing after fetching is done
    return analyticsResult;
  })
  .get()
  .progress(function(value) {
    // Do something with the progress value
  })
  .then(function(analyticsResult) {
    //The result after fetching and processing with the post process callback
  });



  var orgunit = new Fn.IdentifiableObject('organisationUnits'); // Example of an organisation fetcher

orgunit.where('id', 'in', ['Rp268JB6Ne4', 'Rp268JB6Ne2']);
//Declare business process to run after orgunit results
var bussinessAfterOrgunitProcess = (orgUnitResult, analytics) => {
  // Adds dependency
  let ous = orgUnitResult.organisationUnits
    .map(organisationUnit => {
      return organisationUnit.id;
    })
    .join(';');

  analytics.setPeriod('2016').setOrgUnit(ous);
};
var analytics = new Fn.Analytics();

analytics.preProcess(new Fn.Dependency(orgunit, bussinessAfterOrgunitProcess));
analytics.get().then(results => {});



var orgunit = new Fn.IdentifiableObject('organisationUnits');

orgunit.where('id', 'in', ['Rp268JB6Ne4', 'Rp268JB6Ne2']);

var analytics = new Fn.Analytics();

analytics.setPeriod('2016').setOrgUnit('Rp268JB6Ne4;Rp268JB6Ne2');

var multiProcesses = Fn.all([orgunit, analytics]);
multiProcesses.postProcess(res => {
  //res[0] is from orgunit
  //res[1] is from analytics
  return [res[1], res[0]];
});
multiProcesses.get().then(results => {});