import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';


const DropInputField = ( { input, label, multiple, title, meta: { touched, error, warning }, ...rest } ) => {

  const files =  input.value
 

  return (
    <div >
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
            <button type='button'>Upload</button>
          </div>
        
      </Dropzone>

      {(touched && error)
      &&
      <label >{error}</label>
      }
      {(touched && warning)
      && <label>{warning}</label>
      }
      {files && Array.isArray( files ) && (
        <ul>
          {files.map( ( file, i ) =>
            <li key={i}>
              <img src={file.preview}/>
            </li>
          )}
        </ul>
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
  title   : PropTypes.string
};

export default DropInputField;