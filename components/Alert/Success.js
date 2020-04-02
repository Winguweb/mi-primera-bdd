const Success = ({ visible, toggleVisible, children }) => {
  return (
    <div className={`${visible ? 'block': 'hidden'} fixed left-0 right-0 top-90 z-50 bg-green-300 border-t-4 border-green-600 rounded-b p-2 shadow-md`} role="alert">
      <div className="flex items-center justify-center relative">
      <svg className="h-8 w-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"/><path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"/></svg>
        <div className="ml-4 text-black opacity-75">
          <p className="font-bold text-sm font-title uppercase">Su información ha sido guardada correctamente</p>
          <p className="text-sm">
            {children}
          </p>
        </div>
        <div className="absolute right-0">
          <button
            className="button h-8 w-8 flex items-center justify-center font-bold rounded-full "
            onClick={() => toggleVisible(false)}>
            <span className="text-2xl text-black opacity-75">
              &#215;
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Success