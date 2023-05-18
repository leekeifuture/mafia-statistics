import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import validationFormsStyle
    from '../../assets/jss/material-dashboard-pro-react/views/validationFormsStyle'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    onFilesChange = (event) => this.setState({files: event.target.files})

    onFilesUpload = () => {
        mafiaStatisticsApi.uploadStatistics(this.state.files)
            .then(
                data => console.log(data),
                error => console.error(error)
            )
    }

    render() {
        return (
            <GridContainer>
                <GridContainer>
                    <GridItem>
                        <div>Upload statistics files:</div>
                        <input
                            type="file"
                            multiple
                            onChange={this.onFilesChange}/>
                        <button
                            onClick={this.onFilesUpload}>
                            Upload
                        </button>
                    </GridItem>
                </GridContainer>
            </GridContainer>
        )
    }
}

export default withStyles(validationFormsStyle)(Data)
