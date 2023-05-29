import React from 'react'
import { Button, ButtonStrip, DropdownButton, FlyoutMenu, MenuItem} from "@dhis2/ui";
import classes from './App.module.css'

// const query = {
//     me: {
//         resource: 'me',
//     },
// }

const MyApp = () => (
    <div>
        <div
    style={{
        border: '1px solid #c4c9cc',
        padding: 8,
        paddingTop: 130,
        width: '100%'
            }}
        >
    <ButtonStrip>
        <Button name="Primary button"  primary value="default">
            Update
        </Button>
        <Button>
            Options
        </Button>
        <Button>
            Download
        </Button>
        
        <DropdownButton end
            component={<FlyoutMenu><MenuItem label="Line Graph" /><MenuItem label="Bar Chart" /><MenuItem label="Stacked Bar Chart" /></FlyoutMenu>}
            name="buttonName"
            value="buttonValue"
        >
            Visualization Type
        </DropdownButton>
    </ButtonStrip>

        </div>
           <div>
           </div>
    </div>

)














export default MyApp
