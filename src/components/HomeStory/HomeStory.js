import * as React from "react";
import './HomeStory.scss'
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ironmanlogo from '../../assets/images/iron-man.png'
import spidermanlogo from '../../assets/images/spiderman.png'
import hulklogo from '../../assets/images/hulk.png'
import captionlogo from '../../assets/images/caption.png'


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
            the character founded the Avengers alongside caption, Ant-Man, Wasp and the Hulk.`}
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
    // caption
    const caption = (
        <h3 className="content-character">
            {`Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by 
            cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 
            (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was 
            designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely 
            Comics' most popular character during the wartime period. The popularity of superheroes waned following 
            the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. 
            Since Marvel Comics revived the character in 1964, Captain America has remained in publication.`}
        </h3>
    );
    const captionImg = (
        <img src={captionlogo} alt="iron-man" width={300} height={500} />
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
                    Iron man
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
                    Spider man
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
                    Hulk
                </Divider>
                <Grid item xs >
                    {hulk}
                </Grid>
            </Grid>
            {/* Caption */}
            <Grid container>
                <Grid item xs>
                    {caption}
                </Grid>
                <Divider orientation="vertical" flexItem>
                Captain America
                </Divider>
                <Grid item xs >
                    {captionImg}
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeStory
