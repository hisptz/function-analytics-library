import {SQLView} from "./client";

const exampleCredentials = {
    baseURL: process.env.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
}

const variables = {
    periodiso: '202304',
    ouUId: 'Umh4HKqqFp6',
    deUID: 'JIazHXNSnFJ',
    paging: false
}

describe("Client test", function () {
    it("Initializes successfully", async function () {
        const fn = new SQLView(exampleCredentials);
        fn.setId('WRee7t9IkuZ');
        fn.setVariables(variables);
        const result = await fn.get();
        //console.log(fn.get());
        console.log(result);
        expect(true).toBe(true);
    })
})
//sqlViews/WRee7t9IkuZ/data.json?var=periodiso:202304&var=ouUId:Umh4HKqqFp6&var=deUID:JIazHXNSnFJ&paging=false
