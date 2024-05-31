
import { Box, Typography } from '@mui/material'
import { type TableType } from './types'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export const HorizontalTable = ({ data }: { data: TableType }) => {
  const [copied, setCopied] = useState<string>('')
  const renderTextvalue = (text: string | undefined) => text ?? ''

  const handleCopy = (copyValue: string | undefined) => {
    void (async () => {
      const value = renderTextvalue(copyValue?.toString())
      await navigator.clipboard.writeText(value)
      setCopied(value)
      setTimeout(() => {
        setCopied('')
      }, 1000)
    })()
  }

  const renderCopy = (copyData: { icon: boolean; copyValue?: string }) => {
    return (
      <Box
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          float: 'right',
          color: copied === copyData?.copyValue ? '#00cc00' : '#eeeeee',
          ':hover': {
            color: copied === copyData?.copyValue ? '#00cc00' : '#cccccc',
          },
          width: 'max-width',
        }}
        onClick={() => {
          handleCopy(copyData?.copyValue)
        }}
      >
        <ContentCopyIcon
          sx={{
            fontSize: '18px',
            marginLeft: '10px',
          }}
        />
      </Box>
    )
  }

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #e0e1e2',
      }}
    >
      <tbody>
        {data.head.map((col, c) => (
          <tr key={JSON.stringify(col)}>
            <th
              style={{
                backgroundColor: '#ecf0f4',
                textAlign: 'left',
                padding: '10px 15px',
                width: '200px',
                borderBottom: '1px solid #e0e1e2',
              }}
            >
              <Typography variant="label3">{col}</Typography>
            </th>
            {data.body[c].map((row, r) => (
              <td
                key={JSON.stringify(r)}
                style={{
                  borderBottom: '1px solid #e0e1e2',
                  padding: '10px 15px',
                  whiteSpace: 'normal',
                  wordBreak: 'break-all',
                  width: '45%',
                }}
              >
                <Typography variant="body3">{row?.toString()}</Typography>
                {data?.copy?.[c].map(
                  (_row, r) =>
                    data?.copy?.[c]?.[r].icon &&
                    renderCopy(data?.copy?.[c]?.[r])
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
