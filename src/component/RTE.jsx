import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form'



export default function RTE({
    name,
    control,
    label = '',
    defaultValue = '',
}) {
    return (
        <div className='w-full'>
            {label && <label className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>}
            <Controller
                name={name || 'Editor'}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue:defaultValue
                        init={{
                            branding: false,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "advlist",
                                "anchor",
                                "autolink",
                                "autosave",
                                "charmap",
                                "code",
                                "codesample",
                                "directionality",
                                "emoticons",
                                "fullscreen",
                                "help",
                                "image",
                                "imagetools",
                                "insertdatetime",
                                "link",
                                "lists",
                                "media",
                                "nonbreaking",
                                "pagebreak",
                                "preview",
                                "print",
                                "quickbars",
                                "save",
                                "searchreplace",
                                "table",
                                "template",
                                "visualblocks",
                                "visualchars",
                                "wordcount"
                            ],
                            toolbar: [

                                "undo redo | formatselect | fontsizeselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify",
                                "bullist numlist outdent indent | blockquote subscript superscript | link unlink anchor image media emoticons codesample",
                                "table template pagebreak insertdatetime charmap hr | visualblocks visualchars preview fullscreen print code",
                            ],
                            quickbars_selection_toolbar: [
                                "ltr rtl | searchreplace | save | help"
                            ],
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"

                        }}
                        onEditorChange={onChange}
                    />
                )}

            />
        </div>
    )
}














