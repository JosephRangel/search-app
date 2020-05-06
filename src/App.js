import React from "react";

let to_do = [
    [1, 'React', 'description of what is Test1', 'components, library, Progressive', ['Javascript', 'Library', 'Web'], 'https://reactjs.org/'],
    [2, 'Django', 'description of what is Test2', 'secure, scalable', ['Python','framework', 'Web'], 'https://www.djangoproject.com/'],
    [3, 'Nodejs', 'description of what is Test3', 'asynchronous, scalable ', ['Javascript', 'Runtime', 'Web'], 'https://nodejs.org/en/'],
    [4, 'Laravel', 'description of what is Test4', 'syntax', ['PHP', 'Web'], 'https://laravel.com/'],
    [5, '.Net Core', 'description of what is Test5', 'Multiplatform, easy', ['C++', 'C#', 'Web'], 'https://dotnet.microsoft.com/download/dotnet-core'],
    [6, 'Vuejs', 'description of what is Test6', 'progressive, versatile', ['JavaScript', 'Web'], 'https://vuejs.org/'],
    [7, 'Tailwind', 'description of what is Test7', 'customizable, low level', ['CSS', 'Web'], 'https://tailwindcss.com/#what-is-tailwind']
  ];

function Tag(props){
  return (
    <span className='inline-block bg-gray-200 rounded-full px-2 text-sm font-semibold text-gray-700 m-1'>#{props.tag}</span>
  );
}

function Page(props){
  if (props.link) {
    return (<a href={props.link} title="See on GitHub">
      <img className='w-8 absolute right-0 mt-5 mr-2' src='https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-512.png' alt='github'></img>
    </a>)
  }
  return;
}

function Item(props) {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg m-6 bg-white hover:bg xl:w-1/3 sm:w-full md:w-1/3 relative" id={props.element[0]}>
      <Page link={props.element[5]}/>
      <div className='w-full h-2 bg-green-400'></div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 truncate'>{props.element[1]}</div>
        <p className='text-gray-700 text-base h-24 overflow-hidden'>
          {props.element[2]}
        </p>
      </div>
      <div className='px-6 py-2 bg-indigo-600'>
        {props.element[4].map((tag) => <Tag tag={tag} />)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex items-start justify-center flex-wrap bg-gray-200 z-0">
      { to_do.map((element) => <Item element={ element } />) }
    </div>
  );
}

export {to_do};
export default App;
