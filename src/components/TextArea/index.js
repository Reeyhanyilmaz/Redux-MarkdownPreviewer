import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setMarkdownText } from '../../redux/previewerSlice';

function TextArea() {
  const dispatch = useDispatch();
  const markdownText = useSelector(state => state.previewer.markdownText);
  console.log('markdownText', markdownText);

  return (
    <textarea className='border-2 basis-1/2 p-3' value={markdownText} onChange={(e) => dispatch(setMarkdownText(e.target.value))}/>
  )
}

export default TextArea;