import Container from '../container/Container'
import './Block.css'

const pictures = [
    {
      title: 'בית חדש',
      pic: 'key1',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga, temporibus, laudantium dolorum quasi ea ex nobis impedit a iure assumenda et sapiente ratione! Laboriosam quos laborum tempora voluptate veniam.'
    },
    {
      title: 'מחזור משכנתא',
      pic: 'money3',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga, temporibus, laudantium dolorum quasi ea ex nobis impedit a iure assumenda et sapiente ratione! Laboriosam quos laborum tempora voluptate veniam.'
    },
    {
      title: 'ייעוץ',
      pic: 'home2',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga, temporibus, laudantium dolorum quasi ea ex nobis impedit a iure assumenda et sapiente ratione! Laboriosam quos laborum tempora voluptate veniam.'
    },
  ]

function Block() {
  return (
    <div className='block'>
        {
            pictures.map(each =>
              <Container
                key={each.title}
                title={each.title}
                pic={each.pic}
                content={each.content}
              />)
          }
    </div>
  )
}

export default Block