import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GitHubCard() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 42 }} color="red">
					IThinkThatsKirby
				</Typography>
			</CardContent>
			<h1>PICTURE OF ME GOES HERE.jpeg</h1>
			<Typography sx={{ textAlign: 'right', textTransform: 'uppercase' }}>
				I am really good at front end.
			</Typography>
			<CardActions>
				<CardContent>
					<Button size="small" href="https://github.com/IThinkThatsKirby">
						Visit my Git hub HERE
					</Button>
				</CardContent>
			</CardActions>
		</Card>
	);
}
