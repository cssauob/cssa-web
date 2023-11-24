
//uselocation 从当前URL返回位置对象，
// {pathname: ‘/products/school/’, search: ‘?bags’, hash: ‘’, 
// state: undefined}hash: “”pathname: “/products/school/”
// search: “?bags”state: undefined
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? name : <Link to={routeTo}>{name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

