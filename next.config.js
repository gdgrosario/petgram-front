const withReactSvg = require('next-react-svg')
const path = require('path')

/**
 * next-react-svg permite cargar los svg en el proyecto como componentes,
 * esto para reemplazar la importación:
 *
 * **import {ReactComponent as Logo} from 'logo.svg'**
 *
 * por:
 *
 * import Logo from 'logo.svg'
 *
 * Esto se implemento ya que next no soporta la importación de svg a componente
 * diractamente, de tal modo se usa una libreria externa para que funcione.
 *
 * **************FUNCIONALIDAD**************
 *
 * En: include: path.resolve(__dirname, './src/static/svgs')
 * solo se incluyen los svg que seran procesados por next-react-svg,
 * los que esten fuera de esta carpeta no seran procesados.
 *
 * Esto quiere decir que si tratamos un svg como simple archivo,
 * y este ya esta procesado por next-react-svg, no se podra
 * mostrar.
 */

module.exports = withReactSvg({
  include: path.resolve(__dirname, './public/assets/svg')
})
