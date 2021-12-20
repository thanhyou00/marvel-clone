import * as React from "react";
import './HomeStory.scss'
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ironmanlogo from '../../assets/images/iron-man.png'
import spidermanlogo from '../../assets/images/spiderman.png'
import hulklogo from '../../assets/images/hulk.png'
import thorlogo from '../../assets/images/thor.png'


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2)
    }
}));

function HomeStory() {
    // ironman
    const ironman = (
        <h3 className="content-character">
            {`Iron Man is a superhero appearing in American comic books published by Marvel Comics. 
            The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, 
            and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales 
            of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, 
            the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.`}
        </h3>
    );
    const ironmanImg = (
        <img src={ironmanlogo} alt="iron-man" width={300} height={300} />
    )
    // spiderman
    const spiderman = (
        <h3 className="content-character">
            {`Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. 
            He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age 
            of Comic Books. He appears in American comic books published by Marvel Comics and in movies, 
            television shows, and video game adaptations set in the Marvel Universe. Spider-Man is the alias 
            of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents 
            Richard and Mary Parker died in a plane crash.`}
        </h3>
    );
    const spidermanImg = (
        <img src={spidermanlogo} alt="iron-man" width={300} height={350} />
    )
    // hulk
    const hulk = (
        <h3 className="content-character">
            {`The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created 
            by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible 
            Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and 
            muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, 
            a physically weak, socially withdrawn, and emotionally reserved physicist. The two exist as independent dissociative 
            personalities, and resent each other.`}
        </h3>
    );
    const hulkImg = (
        <img src={hulklogo} alt="iron-man" width={300} height={300} />
    )
        // thor
        const thor = (
            <h3 className="content-character">
                {`Thor Odinson, or simply Thor, is a fictional character appearing in American comic books published by Marvel Comics. 
                The character is based on the Norse deity of the same name, the Asgardian god of thunder whose enchanted hammer 
                Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the 
                superhero team the Avengers, Thor has a host of supporting characters and enemies.`}
            </h3>
        );
        const thorImg = (
            <img src={thorlogo} alt="iron-man" width={300} height={400} />
        )

    return (
        <div className="content-main">
            <h2 className="title-main">Marvel Characters</h2>
            {/* Iron man */}
            <Grid container>
                <Grid item xs>
                    {ironmanImg}
                </Grid>
                <Divider orientation="vertical" flexItem>
                    IRON MAN
                </Divider>
                <Grid item xs >
                    {ironman}
                </Grid>
            </Grid>
            {/* Spider man */}
            <Grid container>
                <Grid item xs>
                    {spiderman}
                </Grid>
                <Divider orientation="vertical" flexItem>
                    SPIDER MAN
                </Divider>
                <Grid item xs >
                    {spidermanImg}
                </Grid>
            </Grid>
            {/* Hulk */}
            <Grid container>
                <Grid item xs>
                    {hulkImg}
                </Grid>
                <Divider orientation="vertical" flexItem>
                    HULK
                </Divider>
                <Grid item xs >
                    {hulk}
                </Grid>
            </Grid>
            {/* Thor */}
            <Grid container>
                <Grid item xs>
                    {thor}
                </Grid>
                <Divider orientation="vertical" flexItem>
                THOR ODINSON
                </Divider>
                <Grid item xs >
                    {thorImg}
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeStory
