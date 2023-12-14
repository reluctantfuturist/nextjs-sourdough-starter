import React from "react"
import htmlToPdfMake from "html-to-pdfmake"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

pdfMake.vfs = pdfFonts.pdfMake.vfs

interface SavePDFProps {
  storyId: string
  title: string
  content: string
}

const SavePDF: React.FC<SavePDFProps> = ({ storyId, title, content }) => {
  const handleDownloadPdf = async () => {
    const pdfContent = htmlToPdfMake(content)
    const documentDefinition = {
      content: [
        //        { text: title, fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        ...pdfContent,
      ],
    }

    pdfMake.createPdf(documentDefinition).download(`${title}.pdf`)
  }

  return (
    <Button variant="default" onClick={handleDownloadPdf}>
      PDF
    </Button>
  )
}

export default SavePDF
