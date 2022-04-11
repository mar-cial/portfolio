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
    <h2 className="pb-4 text-2xl font-semibold text-red-500">
      {title}
    </h2>
  )
}

export default CategoryTitle
