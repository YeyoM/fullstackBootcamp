import Title from './Title';
import Content from './Content';
import Suma from './Suma';

export const Course = ({course}) => {
    return (
        <div>
            <Title course = {course.name}/>
            <Content parts = {course.parts}/>
            <Suma parts = {course.parts}/>
        </div>
    )
}