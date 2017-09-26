import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import IconButton from 'material-ui/IconButton';
import UploadIcon from 'material-ui-icons/FileUpload';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';


const styles = theme => ({
    root    : theme.mixins.gutters( {
        maxWidth     : '250px',
        textAlign    : 'center',
        paddingTop   : 16,
        paddingBottom: 16,
        marginTop    : theme.spacing.unit * 3,
    } ),
    gridList: {
        flexWrap : 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
});


const DropInputField = ( { input, label, multiple, title, classes, meta: { touched, error, warning }, ...rest } ) => {

    const files = input.value;


    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <label>{label}</label>
                <Dropzone
                    style={{}}
                    multiple={multiple}
                    name={input.name}
                    onDrop={( filesToUpload, e ) => input.onChange( filesToUpload )}>
                    <div>
                        {title}
                    </div>
                    <div>
                        <IconButton aria-label="Delete" color="accent">
                            <UploadIcon/>
                        </IconButton>
                    </div>

                </Dropzone>
            </Paper>

            {(touched && error)
            &&
            <label>{error}</label>
            }
            {(touched && warning)
            && <label>{warning}</label>
            }
            {files && Array.isArray( files ) && (
                <GridList className={classes.gridList} cols={2.5}>
                    {files.map( ( file, i ) =>
                        <GridListTile key={i}>
                            <img src={file.preview}/>
                        </GridListTile>
                    )}
                </GridList>
            )
            }
        </div>

    );
};

DropInputField.defaultProps = {
    multiple: false,
    title   : 'Try dropping some files here, or click to select files to upload.'
};

DropInputField.propTypes = {
    multiple: PropTypes.bool,
    title   : PropTypes.string,
    classes : PropTypes.object.isRequired
};

export default withStyles( styles )( DropInputField );