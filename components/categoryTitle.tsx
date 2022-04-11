/*
* Created by cesarmarcial on 10/04/22
*/

// imports

// interface
type CategoryTitleProps = {
  title: string
}

// Beginning of component: categoryTitle
const CategoryTitle = ({title}: CategoryTitleProps) => {
  return (
    <h2 className="text-2xl pb-4 font-semibold">
      {title}
    </h2>
  )
}

export default CategoryTitle
