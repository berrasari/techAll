/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div id="banner" className="bg-banner"  >
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex justify-center items-center">
          <div className="text-white -rotate-6 font-body tracking-widest font-extrabold text-xl leading-8 mr-6	 uppercase-text rotate">Howdy!</div>
            <p className="ml-3font-normal	 text-white truncate">
              <div className="m ">Explore the best popup builder on the market with respectful reviews.</div>
              
            </p>
          </div>
         
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md  " data-dismiss-target="#banner" aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
