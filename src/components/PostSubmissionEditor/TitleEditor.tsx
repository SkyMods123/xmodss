import { FC, useRef } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import getTrans from '@/utils/getTrans'
import Label from 'your-label-component-path' // Adjust the import path as necessary
import Input from 'your-input-component-path' // Adjust the import path as necessary

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
				class: 'focus:outline-none max-w-screen-md mx-auto text-neutral-900 font-semibold text-2xl sm:text-3xl lg:text-4xl xl:leading-[115%] xl:text-[2.75rem] dark:text-neutral-100',
			},
		},
		immediatelyRender: false,
		content: defaultTitle,
		onUpdate: ({ editor }) => {
			// @ts-ignore
			onUpdate(editor)
		},
	})

	return (
		<>
			<div className="EditProfileForm__firstName">
				<Label>{T['First Name']}</Label>
				<Input
					<EditorContent className="focus:outline-none" editor={editor} />
				/>
			</div>

		</>
	)
}

export default TitleEditor
