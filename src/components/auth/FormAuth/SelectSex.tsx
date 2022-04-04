export const SelectSex = ({ changeInputValues }) => {
  return (
        <div className="select-sex">
                <p className="select-sex__label">
                    Sexo
                </p>
                <div className="select-sex__content">

                    <input
                        onChange={e => changeInputValues(e)}
                        value="Masculino"
                        id="masculino"
                        type="radio"
                        name="sex"/>
                    <label className="select-sex__sex-option" htmlFor="masculino">Masculino</label>

                    <input
                        onChange={e => changeInputValues(e)}
                        value="Femenino"
                        id="femenino"
                        type="radio"
                        name="sex"/>
                    <label className="select-sex__sex-option" htmlFor="femenino">Femenino</label>

                </div>
        </div>
  )
}
