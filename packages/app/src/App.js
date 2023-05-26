import React from 'react'
import { Button, ButtonStrip } from "@dhis2/ui";
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
    </ButtonStrip>

        </div>
    </div>

)

export default MyApp
