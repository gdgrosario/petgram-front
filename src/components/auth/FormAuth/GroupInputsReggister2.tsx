export const GroupInputsReggister2 = ({ changeInputValues, inputValues }) => {
  return (
        <>
            <input
                onChange={e => changeInputValues(e)}
                name= "name"
                placeholder="Nombre"
                type="text"
                value = {inputValues.name}
                className="content-form-auth__input"
            />

            <input
                onChange={e => changeInputValues(e)}
                name= "nickname"
                placeholder="Usuario"
                type="text"
                value= {inputValues.nickname}
                className="content-form-auth__input"
            />
        </>
  )
}
