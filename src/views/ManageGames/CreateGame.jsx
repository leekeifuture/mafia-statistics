import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import React from 'react'
import CreateGameComponent from './CreateGameComponent/CreateGameComponent'

import Step1 from './CreateGameComponent/CreateGameSteps/Step1.jsx'
import Step2 from './CreateGameComponent/CreateGameSteps/Step2.jsx'

class CreateGame extends React.Component {
    render() {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={8}>
                    <CreateGameComponent
                        validate
                        steps={[
                            {
                                stepName: 'Игроки',
                                stepComponent: Step1,
                                stepId: 'players'
                            },
                            {
                                stepName: 'Роли',
                                stepComponent: Step2,
                                stepId: 'roles'
                            }
                        ]}
                        title="Создание новой игры"
                        finishButtonClick={e => console.log(e)}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

export default CreateGame
