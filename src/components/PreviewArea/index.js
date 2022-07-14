import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function PreviewArea() {
  const markdownText = useSelector(state => state.previewer.markdownText);
  console.log('markdownText :>> ', markdownText);
  return (
    <div className='border-2 basis-1/2 bg-indigo-300 border-none rounded-lg'>
      <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]}/>
    </div>
  )
}

export default PreviewArea;