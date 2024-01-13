import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import type { JSX } from "preact"


export default (() => {
  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      // const segments: string[] = []
      const segments: JSX.Element[] = []
      const { text: timeTaken, words: _words } = readingTime(text)

      // if (fileData.dates) {
      //   segments.push(formatDate(getDate(cfg, fileData)!))
      // }
      if (fileData.dates) {
        if (fileData.dates.created) {
          segments.push(
            <span>
              🌿 Planted {formatDate(fileData.dates.created)}
            </span>,
          )
        }

        if (fileData.dates.modified) {
          segments.push(
            <span>
              🧤 Last tended {formatDate(fileData.dates.modified)}
            </span>,
          )
        }
      }

      segments.push(<span>⏲ {timeTaken}</span>)

      // return <p class={`content-meta ${displayClass ?? ""}`}>{segments.join(", ")}</p>
      return (
        <p class="content-meta">
          {segments.map((meta, idx) => (
            <>
              {meta}
              {idx < segments.length - 1 ? <br /> : null}
            </>
          ))}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
