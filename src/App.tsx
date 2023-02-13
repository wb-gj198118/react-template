import { lazy, Suspense, useState } from 'react'
import smallImg from '@assets/imgs/5kb.png'
import bigImg from '@assets/imgs/22kb.png'
import DataAnalysis from '@assets/icon/data-analysis.svg';
import { Demo3 } from '@/components'
import './app.less'

// prefetch
const PreFetchDemo = lazy(() => import(
  /* webpackChunkName: "PreFetchDemo" */
  /*webpackPrefetch: true*/
  '@components/PreFetchDemo'
))
// preload
const PreloadDemo = lazy(() => import(
  /* webpackChunkName: "PreloadDemo" */
  /*webpackPreload: true*/
  '@components/PreloadDemo'
))

function App() {
  const [show, setShow] = useState(false)

  const onClickSSSSSSS = () => {
    setShow((prev) => !prev)
  }
  return (
    <>
      <h2 onClick={onClickSSSSSSS}><img src={DataAnalysis} width={22} height={22} />展示</h2>
      {/* show为true时加载组件 */}
      {show && (
        <>
          <img src={smallImg} alt="小于10kb的图片" />
          <img src={bigImg} alt="大于于10kb的图片" />
          <div className='smallImg'></div> {/* 小图片背景容器 */}
          <div className='bigImg'></div> {/* 大图片背景容器 */}
          <Suspense fallback={null}><PreloadDemo /></Suspense>
          <Suspense fallback={null}><PreFetchDemo /></Suspense>
        </>
      )}
      <Demo3 />
    </>
  )
}
export default App