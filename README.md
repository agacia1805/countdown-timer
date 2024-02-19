## Getting started:

To open this app on your local after you cloned the repository, run this command:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Tech stack:

<div >
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/></code>
</div>

## App features:

- user can set the timer to any value that is no bigger than 60 for seconds and minutes and 99 for hours
- timer can be started by clicking "Start" button, paused by clicking "Pause" button and restarted by clicking "Reset" button
- when timer is done counting, there will be an automatic rooster alarm sound to let user know the time is up

## Technical details:

- project created with Next.js template
- language of choice: TypeScript
- styles provided with Tailwind CSS
- animations were created with framer motion
- the first iteration of countdown timer was created with simple effects, state, Date object and setInterval method
- the second iteration of countdown timer was created with a help of external library hooks

## Possible improvements:

- timer can have split results/stopwatch functionality
- user is able to add multiple timers
- countdown timer measuring time till holidays/important events
