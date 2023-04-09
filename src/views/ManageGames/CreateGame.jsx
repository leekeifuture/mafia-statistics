import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import Wizard from 'components/Wizard/Wizard.jsx'
import React from 'react'

import Step1 from './CreateGameSteps/Step1.jsx'
import Step2 from './CreateGameSteps/Step2.jsx'
import Step3 from './CreateGameSteps/Step3.jsx'

class CreateGame extends React.Component {
    render() {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={8}>
                    <Wizard
                        validate
                        steps={[
                            {
                                stepName: 'About',
                                stepComponent: Step1,
                                stepId: 'about'
                            },
                            {
                                stepName: 'Account',
                                stepComponent: Step2,
                                stepId: 'account'
                            },
                            {
                                stepName: 'Address',
                                stepComponent: Step3,
                                stepId: 'address'
                            }
                        ]}
                        title="Build Your Profile"
                        subtitle="This information will let us know more about you."
                        finishButtonClick={e => console.log(e)}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

export default CreateGame
