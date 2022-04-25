import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import GitHubCard from './GitHubCard';
import Typography from '@mui/material/Typography';

test('renders stuff', () => {
	render(<App />);
	const pic = renderer.create(<GitHubCard />).toJSON();
	expect(pic).toMatchSnapshot();
});
test('rendersName', () => {
	render(<App />);
	const name = screen.getByText('IThinkThatsKirby');
	expect(name).toBeInTheDocument();
});
