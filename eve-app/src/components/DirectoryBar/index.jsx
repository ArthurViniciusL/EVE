import './directory-bar-style.css'

export const DirectoryBar = ({ PATH }) => {
    return (
        <>
            <div className='directory-bar-content'>
                <div className='DirectoryBar-path-box-content'>
                    <div className='DirectoryBar-path-content'>
                        <p>{PATH}</p>
                    </div>

                </div>

                {/*  <p>{sliceName(texto, 10)}</p> */}

            </div>
        </>
    )
}