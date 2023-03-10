import { PureComponent } from "react";

type ClassDecorator = <TFunction extends PureComponent>(target: TFunction) => TFunction | void;
type Constructor = new (arg: ClassDecorator) => object;

// 装饰器为，组件添加age属性
function addAge(Target: Constructor) {
	Target.prototype.age = 111
}

// 使用装饰圈
@addAge
class Demo3 extends PureComponent {

	age?: number
	aaa?: number

	render() {
		return (
			<>
				<h2>我是类组件---{this.age}----{this.aaa}</h2>
			</>
		)
	}
}

Demo3.prototype.aaa = 1111

export default Demo3