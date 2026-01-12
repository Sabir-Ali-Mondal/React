import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [Length, setLength] = useState(8)
  const [numberAlllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [PassWord, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passWordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAlllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 1; i <= Length; i++) {
      let char = (Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [Length, numberAlllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 111); // For mobile devices
    window.navigator.clipboard.writeText(PassWord)
  }, [PassWord])

  useEffect(() => {
    passWordGenerator()
  }, [Length, numberAlllowed, charAllowed, passWordGenerator])

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-gray-800 p-4">
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-500'>
          <h2 className='text-center text-white'>PassWord Generator</h2>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 input-group'>
            <input
              type="text"
              readOnly
              value={PassWord}
              className='w-full px-3 py-2 text-lg bg-white outline-none'
              placeholder='Password'
              ref={passwordRef}
            />
            <button
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg'
              onClick={copyPasswordToClipboard}
            >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={Length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />
              <label className='text-white'>Length: {Length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                checked={numberAlllowed}
                id='numberInput'
                onChange={(e) => {
                  setnumberAllowed(prev => !prev);
                }}
              />
              <label className='text-white' htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                checked={charAllowed}
                id='characterInput'
                onChange={(e) => {
                  setcharAllowed(prev => !prev);
                }}
              />
              <label className='text-white' htmlFor='characterInput'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
