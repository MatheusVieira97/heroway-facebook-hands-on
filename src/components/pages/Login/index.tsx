import React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';

import { ReactComponent as GithubLogo } from '../../../assets/img/github-logo.svg';
import { getGithubUser } from '../../../redux/reducers/github';
import { IAppState } from '../../../redux/configureStore';


const Login: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("MBdeSousa");
  const dispatch = ReactRedux.useDispatch();
  const history = ReactRouter.useHistory();

  const githubState = ReactRedux.useSelector((state: IAppState) => {
    return state.github;
  });

  React.useEffect(() => {
    if (githubState.user !== null) {
      history.push('/feed');
    }
  }, [githubState, history]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    const reduxAction = getGithubUser(inputValue);
    dispatch(reduxAction);
  }

  return (
    <div className="login">
      <div className="login-box">
        <GithubLogo className="github-logo" />

        <input defaultValue="MBdeSousa" onChange={handleChange} className="github-input" type="text" placeholder="Digite seu usuário do Github" />

        {githubState.isEmpty === true ? 'Não há usuarios' : undefined}
        {githubState.hasErrors === true ? 'Algo deu errado...' : undefined}

        <button className="github-button" onClick={handleClick} disabled={githubState.isLoading}>
          {githubState.isFetching === true ? 'Carregando...' : 'Enviar'}
        </button>
      </div>
    </div>
  );
};

export default Login;
