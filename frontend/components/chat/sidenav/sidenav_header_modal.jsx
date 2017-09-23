import React from 'react'
import Modal from 'react-modal'

import modalStyle from '../../../util/modal_style'

class SidenavHeaderModal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { isOpen, onRequestClose } = this.props

    return (
      <Modal
        style={modalStyle}
        contentLabel="User Menu"
        isOpen={true}
        onRequestClose={onRequestClose}
      >
        <div className="modal_content modal_content--scroll">
          <h2>Im a modal!</h2>
          <p>modal modal modal modal modal</p>
          <p>mooooooooodal!</p>
          {/*<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget turpis justo. In efficitur volutpat neque in lacinia. Vivamus vitae tellus a magna condimentum bibendum quis id eros. Nunc hendrerit nisi ut porta convallis. Nullam et tortor egestas, porttitor mi ut, placerat eros. Nullam augue sem, maximus a semper non, condimentum quis dui. Duis sit amet dolor ut lorem egestas consectetur. Curabitur lobortis nibh vitae nisl malesuada blandit ut vitae leo. Proin enim justo, pulvinar non gravida nec, condimentum quis elit. Donec a maximus lorem, in interdum tellus. Praesent vel vestibulum urna. Aenean vitae arcu accumsan, consectetur nisi sit amet, vehicula ex. Phasellus scelerisque sapien non felis consequat, ac blandit leo vehicula. Duis vehicula, nibh sit amet interdum luctus, urna nulla cursus dui, vitae mollis urna ante quis risus. Etiam at erat iaculis, interdum metus sit amet, varius augue. Nulla arcu mauris, pharetra sed lacus vitae, scelerisque maximus lorem.

Fusce ultricies, massa vulputate consectetur placerat, augue nibh commodo leo, sed consectetur dolor mi vitae libero. Quisque cursus cursus pellentesque. Etiam a auctor nisi, in scelerisque magna. Proin sagittis varius interdum. Etiam iaculis varius est, id molestie odio fringilla ut. Integer ac nulla et risus imperdiet suscipit. Phasellus id orci dignissim, efficitur diam et, vulputate elit. Morbi non nibh condimentum, porttitor felis a, interdum metus. Aliquam efficitur consequat magna, vitae vulputate odio ornare sed. Quisque mattis rhoncus sodales. Aliquam vitae viverra quam. Duis pellentesque, justo eu aliquam facilisis, augue nisl sodales turpis, at pharetra est orci sollicitudin leo.

Curabitur sit amet dictum tellus, ac sodales lorem. Vestibulum ut tempor purus. Pellentesque aliquet enim dui, non varius dolor ultrices sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum lorem ac quam facilisis commodo. Etiam nec erat eu magna iaculis aliquet sit amet id ligula. Suspendisse id dictum quam. Aenean ornare sit amet libero vel tempus. Donec dictum, velit quis laoreet fringilla, tortor arcu lacinia est, in consequat turpis quam at enim. Nunc auctor ex ut neque vulputate sodales. Phasellus vitae tortor ut lacus mattis sollicitudin. Fusce fermentum et nunc molestie fermentum.

Sed vel mauris fermentum, laoreet velit et, egestas lacus. Vivamus blandit lectus metus, quis tincidunt risus eleifend a. Mauris eleifend mauris maximus lacus sagittis, eu ullamcorper erat dignissim. Curabitur sed varius nisi. Morbi quis mi lacus. Donec nec gravida sem. Vestibulum ullamcorper, massa vitae egestas porttitor, ex leo varius nibh, a laoreet risus turpis non felis. Sed ut tincidunt sapien, ut laoreet mauris. Vestibulum porttitor ligula quis eros vulputate pellentesque. Phasellus id auctor risus.

Cras egestas massa eu felis convallis sodales. In luctus lacus ante, eu pulvinar sem lobortis in. Nulla sit amet dapibus nibh, ut consequat metus. Suspendisse potenti. Fusce fermentum, arcu ac suscipit interdum, orci dui venenatis lacus, sed faucibus nibh sem id justo. Aenean mollis nisl et nisi vehicula, at fermentum est tincidunt. Mauris lacinia, nunc id varius accumsan, augue ligula ornare ante, nec faucibus odio dui vel dolor. Nam vel nunc sed elit dictum iaculis ac faucibus eros. Vestibulum posuere nisi ac turpis congue posuere. Aenean sagittis, orci vitae molestie egestas, ante neque tempus dolor, et semper odio lectus eget neque. Integer ullamcorper enim ac varius porta.

Praesent ac porttitor eros, id bibendum sapien. Sed imperdiet dignissim turpis elementum blandit. Sed congue risus eu lacinia aliquam. Etiam vitae erat ornare, iaculis dui non, convallis diam. Sed tincidunt dolor ut velit euismod, vitae accumsan libero viverra. Integer finibus vel massa a faucibus. Sed sit amet ante venenatis, euismod quam vitae, tempus diam. Nulla interdum purus in lacus vestibulum, sit amet molestie tortor egestas. Aenean imperdiet sapien purus, a pellentesque felis aliquam sed. Morbi a ultrices augue. Aliquam ac diam urna. Pellentesque maximus, lectus sagittis ornare cursus, quam augue bibendum nisi, sed fringilla mi velit ut augue. Suspendisse felis turpis, accumsan at euismod ut, rutrum sed orci. Mauris enim neque, tincidunt eu diam vitae, suscipit iaculis lacus. Proin sed felis dapibus, iaculis justo sit amet, tristique nunc. Sed molestie leo eu ligula tempus, non interdum purus placerat.

Nam non pretium tellus. Phasellus rutrum maximus arcu vitae ultrices. Curabitur imperdiet erat vel eros condimentum porta. Nam iaculis, nibh vel ornare tristique, justo nibh finibus nisi, non malesuada lectus erat quis leo. Nullam eget maximus dui. Pellentesque a purus massa. Morbi convallis nibh risus, vel pretium nisi imperdiet ut. Donec pharetra risus justo. Nulla pellentesque neque vel quam iaculis gravida. Vestibulum hendrerit eu ipsum eu eleifend. Aenean nec lacus vel lacus hendrerit porttitor. Nulla facilisi. Donec tellus nisl, consequat at mi ac, pharetra hendrerit diam. Donec eget auctor arcu. Etiam aliquam mi a tellus efficitur tincidunt.

In ultricies quam ut malesuada convallis. Cras maximus sapien eget dolor dapibus, sed ornare lorem ornare. Integer eu nulla quis justo auctor pretium ac a velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus in maximus tortor. Cras feugiat lacinia tortor, id condimentum metus. Nam congue erat in porttitor malesuada. Curabitur leo lacus, pulvinar blandit rutrum et, mollis nec ligula. Maecenas in leo eu felis accumsan placerat. Nulla nec odio vel libero sodales dignissim. Sed tincidunt lectus nisi, rutrum tempus tellus finibus vitae. Etiam sodales magna velit, in pulvinar tellus vehicula sed. Vivamus id ornare purus. Donec pretium vulputate felis eleifend lacinia. Integer consectetur massa at ipsum iaculis faucibus. Integer eget sapien laoreet, ornare nulla et, posuere ligula.

Vestibulum sollicitudin mattis nisl sit amet vehicula. Mauris quam felis, gravida a tincidunt vel, pulvinar nec odio. Sed dictum a arcu in consectetur. Morbi quis interdum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin at tristique massa, ut porta neque. Sed mollis, elit eget mattis auctor, sapien purus tempor quam, a efficitur felis urna eu nisl. Nulla nec sodales elit. Nulla rutrum pharetra neque non sagittis. Aliquam sit amet faucibus metus. Etiam id mauris eget justo malesuada gravida. In pellentesque non mauris eu tincidunt.

Proin sapien mi, lacinia a accumsan nec, elementum non neque. Nam ut egestas est, id vehicula nisl. Sed feugiat ornare dolor, id lobortis ligula pellentesque bibendum. Maecenas dignissim urna quam, ac lacinia felis porta in. Vestibulum non egestas metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum nisl eget odio sodales, quis rhoncus tortor volutpat. Integer tristique pretium luctus. Donec sit amet mi ullamcorper, dignissim ex sit amet, maximus ipsum. Vestibulum in euismod mauris. Curabitur maximus enim augue, suscipit eleifend purus gravida nec. Donec odio velit, facilisis lacinia mattis at, faucibus quis massa. Aliquam eget urna imperdiet, tincidunt dolor nec, lobortis libero. Ut sit amet eros ac tellus viverra luctus. Praesent porttitor condimentum metus, consequat pharetra nibh cursus molestie. Aliquam laoreet suscipit nisi in suscipit.

Nunc id lacus vitae lorem posuere ultricies id blandit sem. Donec a malesuada neque. Quisque eget ligula ut nunc rutrum volutpat quis a nisl. Donec feugiat, turpis ac pharetra commodo, purus lacus viverra dolor, in maximus ex lacus ac tellus. Donec eget orci blandit, sollicitudin orci gravida, rhoncus massa. Sed volutpat augue ac molestie vulputate. Praesent leo lacus, vehicula a ipsum at, rutrum varius risus. Aenean id diam ac enim feugiat pulvinar. Donec porttitor risus id ligula pulvinar lobortis.

Aliquam varius dignissim sapien vel dignissim. Pellentesque et imperdiet eros. Integer suscipit maximus ipsum sed lobortis. Nunc blandit gravida blandit. Sed vestibulum orci eget fringilla gravida. Vestibulum molestie sed nibh iaculis lacinia. In convallis sodales lectus a sodales. Vivamus eu volutpat nunc. Phasellus mauris ligula, scelerisque quis lacinia non, viverra ac eros. Duis lacinia augue sed auctor bibendum. Vivamus a lobortis lorem, sit amet eleifend tortor. Morbi cursus laoreet viverra. Nulla quis dui purus. In accumsan porttitor facilisis. Quisque vestibulum tortor metus, sit amet suscipit lorem dapibus sit amet. Aliquam id tempus ligula, et posuere velit.

Ut convallis elit tellus, varius fermentum orci tristique quis. Aenean commodo malesuada ligula eget ultricies. Pellentesque porttitor nisl vitae risus dictum, non dapibus risus dapibus. Aenean ut magna laoreet, sollicitudin nisi ut, consequat erat. Fusce tempus, velit et luctus laoreet, magna metus viverra tellus, luctus molestie nisl libero et diam. Integer sapien felis, elementum a ullamcorper vel, dictum eu ligula. Curabitur sed libero efficitur, suscipit dolor commodo, egestas nulla. Phasellus pretium neque non nisl facilisis, eget pharetra magna volutpat. Etiam faucibus risus at ipsum lacinia, nec placerat magna vehicula. Praesent non tortor semper sem euismod rhoncus vitae quis neque. Cras ultrices massa mi, non vestibulum quam elementum sed. Proin eget libero erat. Donec rutrum, sem sed dictum scelerisque, sem orci sagittis justo, sed pulvinar velit neque sagittis ex. Aliquam erat volutpat. Aliquam erat volutpat. Vestibulum volutpat metus et nibh euismod blandit.

Fusce efficitur felis nec volutpat pulvinar. Aenean eget placerat arcu, sed pellentesque magna. Pellentesque mattis feugiat eros vitae gravida. Nullam eleifend commodo orci et suscipit. Donec mauris turpis, feugiat sed mauris et, commodo malesuada libero. Nulla egestas ut nisl vel finibus. Sed rhoncus, ex non auctor porta, libero augue sollicitudin enim, sed mollis magna mi sed odio.

Integer tristique aliquam leo, vel fringilla odio consectetur viverra. Aenean at nulla facilisis, commodo eros sit amet, sagittis diam. Sed dignissim, ante a placerat placerat, lacus elit consectetur tortor, at semper lacus massa quis libero. Nunc vulputate elit vitae nulla tincidunt convallis. Cras pulvinar turpis turpis, nec egestas lacus ornare eget. Duis eget diam purus. Phasellus ut elementum tellus. Donec sagittis justo et ligula venenatis, nec varius nibh ullamcorper. Mauris purus est, sagittis vel metus a, elementum laoreet leo.

Vestibulum pretium vehicula tortor vitae tincidunt. Nunc vitae neque lectus. Sed et quam et metus consectetur feugiat. Maecenas lacinia orci in venenatis aliquam. Phasellus porttitor ipsum a sapien pharetra, sed elementum metus ullamcorper. Sed posuere ullamcorper ultricies. Nulla facilisi. Morbi pharetra, massa sit amet finibus faucibus, enim metus dignissim nulla, eget placerat odio purus et purus. Suspendisse potenti. In imperdiet, nulla nec luctus maximus, odio nibh porttitor arcu, vitae eleifend odio leo sed turpis. Mauris mollis turpis velit, ac ultricies dui volutpat elementum. Pellentesque elementum faucibus finibus. Etiam convallis, mauris ac euismod dapibus, nibh est consequat orci, nec hendrerit ex purus aliquet nisi.

Nam volutpat ultrices orci ut ultricies. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vehicula arcu non est auctor ultricies. Integer tincidunt sed erat sit amet accumsan. Suspendisse ac ullamcorper tellus, in rhoncus ex. Nam bibendum magna id ligula lobortis, non porta arcu facilisis. Nam nibh ante, molestie ut pellentesque ut, aliquet sed ante. Curabitur iaculis suscipit efficitur. Suspendisse ultricies est et egestas condimentum. Nulla elementum tincidunt porttitor. Proin fermentum eget ipsum ac laoreet. Curabitur dictum sed est ac volutpat. Cras fermentum nunc est.

Etiam euismod maximus turpis vel placerat. Phasellus faucibus gravida lacinia. Morbi quis facilisis arcu. Duis viverra neque id eros iaculis, sit amet mattis magna tincidunt. Curabitur quis condimentum turpis. Duis et tortor ligula. Suspendisse at lectus mi. Aenean laoreet nulla sed odio posuere, at porttitor justo viverra. Sed lacinia ex vel bibendum auctor. Nam facilisis vestibulum turpis ac ultricies.

Pellentesque tristique a tortor et congue. Donec suscipit augue vitae libero rutrum tincidunt. Proin id tellus dignissim, iaculis quam sed, efficitur massa. Quisque non orci leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sodales quis tellus at tempus. Curabitur hendrerit, nisl non mattis elementum, velit tortor ultrices arcu, vel aliquet sem leo eu sem. Sed rutrum, tellus at mollis scelerisque, purus lorem pellentesque eros, id vehicula leo arcu sit amet mi.

Aenean consequat gravida nisl id scelerisque. Quisque faucibus, elit aliquet accumsan consequat, turpis ipsum congue est, sed pellentesque lorem urna at orci. Integer leo augue, porta quis augue sed, bibendum pharetra magna. Nam feugiat mi velit, at elementum est venenatis ut. Nullam tempus eleifend tellus, ut hendrerit nisl finibus in. Ut sed enim nec enim porta varius. Donec eget maximus lectus, vitae venenatis velit. Proin ultrices imperdiet tellus at tristique. Praesent porttitor feugiat eros id mollis. Nullam lacinia nisl eget risus ornare interdum. Donec accumsan risus eu purus bibendum, vel vulputate nisi iaculis. Etiam non lectus enim. Sed ac dui consectetur, rhoncus elit in, sollicitudin velit. Vivamus pharetra orci vitae nulla aliquam, et condimentum lacus luctus. Quisque non mattis augue. Maecenas arcu diam, consequat nec magna eu, ultrices lobortis massa.


          </p>*/}
        </div>

      </Modal>
    )
  }
}

export default SidenavHeaderModal
