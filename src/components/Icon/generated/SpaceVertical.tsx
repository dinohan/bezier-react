import React from 'react'

function SvgSpaceVertical(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.354 21.646a.5.5 0 01-.708 0l-3.963-3.963A.4.4 0 017.966 17H11V7H7.966a.4.4 0 01-.283-.683l3.963-3.963a.5.5 0 01.708 0l3.963 3.963a.4.4 0 01-.283.683H13v10h3.034a.4.4 0 01.283.683l-3.963 3.963z"
      />
    </svg>
  )
}

export default SvgSpaceVertical