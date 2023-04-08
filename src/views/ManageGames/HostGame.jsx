import React from 'react'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import App from './HostGame/src/App'

class HostGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    render() {
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator />
                : (<>
                    <GridContainer>
                        <GridItem xs={12}>
                            <App />
                        </GridItem>
                    </GridContainer>
                </>)}
        </>)
    }
}

export default HostGame
