
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="prompt_card mt-5">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="rounded-full bg-gray-200 animate-pulse" style={{ width: 40, height: 40 }}></div>
          <div className="flex flex-col">
            <div className="h-4 bg-gray-200 animate-pulse rounded w-24"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-40 mt-2"></div>
          </div>
        </div>
        <div className="copy_btn">
          <Image 
            alt="copy-or-tick-icon"
            src='/assets/icons/copy.svg'
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className="my-4 bg-gray-200 animate-pulse rounded h-4 w-3/4"></div>
      <div className="bg-gray-200 animate-pulse rounded h-4 w-1/4"></div>
      <div className="mt-5 flex-center gap-4 border-t border-grey-100 pt-3">
        <div className="h-4 bg-gray-200 animate-pulse rounded w-16"></div>
        <div className="h-4 bg-gray-200 animate-pulse rounded w-16"></div>
      </div>
    </div>
  )
}

export default Loading;