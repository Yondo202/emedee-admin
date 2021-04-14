import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const configuration = {
    // Configure the available styles.
    styles: [
        'alignLeft', 'alignCenter', 'alignRight'
    ],

    // Configure the available image resize options.
    resizeOptions: [
        {
            name: 'resizeImage:original',
            label: 'Original',
            value: null
        },
        {
            name: 'resizeImage:50',
            label: '50%',
            value: '50'
        },
        {
            name: 'resizeImage:75',
            label: '75%',
            value: '75'
        }
    ],
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
    ],
};

const Editor = ({ onChange, name, value }) => {
    return (
        <Wrapper>
            <CKEditor
                editor={ClassicEditor}
                config={configuration}
                data={value}
                onReady={(editor) => {
                    if (value) {
                       editor.setData(value);
                    }
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange({ target: { name, value: data } });
                    
                }}
            />
        </Wrapper>
    );
};

Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
};

export default Editor;