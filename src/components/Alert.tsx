interface IAlert{
    message: string
    closeAlert?: () => void
}
export const Alert = ({ message }:IAlert) => {
  return (
    <>
        <div>
            <p>{message}</p>
        </div>

        <style jsx>{`
            p{
                color: red;
            }
        `}</style>
    </>
  )
}
