import { FC } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import getTrans from '@/utils/getTrans'
import Textarea from '@/components/Textarea/Textarea'

interface Props {
  onUpdate: (editor: Editor) => void
  defaultTitle?: string
}

const TitleEditor: FC<Props> = ({ onUpdate, defaultTitle = '' }) => {
  const T = getTrans()
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: T.pageSubmission['New post title here…'],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'focus:outline-none max-w-screen-md mx-auto text-neutral-900 font-semibold text-2xl sm:text-3xl lg:text-4xl xl:leading-[115%] xl:text-[2.75rem] dark:text-neutral-100',
      },
    },
    immediatelyRender: false,
    content: defaultTitle,
    onUpdate: ({ editor }) => {
      onUpdate(editor)
    },
  })

  return (
    <>
      <EditorContent editor={editor} className="mt-1" />
      <Textarea
        editor={editor}
        className="mt-1"
        placeholder="cheat title"
        name="excerpt"
      />
    </>
  )
}

export default TitleEditor
