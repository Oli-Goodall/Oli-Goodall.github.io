import { Card, CardContent, CardHeader, Collapse, Container, IconButton } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";
import "./CVPage.scss"

export const CVPage: React.FunctionComponent = () => {
    const [techSwitchIsExpanded, setTechSwitchIsExpanded] = useState(false);
    const [opusIsExpanded, setOpusIsExpanded] = useState(false);
    const [ladyDinahsIsExpanded, setLadyDinahsIsExpanded] = useState(false);
    const [undergradIsExpanded, setUndergradIsExpanded] = useState(false);
    const [mastersIsExpanded, setMastersIsExpanded] = useState(false);

    return(
        <div className="cv-page">
            <h1 className="cv-page-heading">Curriculum Vitae</h1>
            <h2 className="education">Education
            <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
        <CardHeader
          title="University College London | 2018-2019"
          action={
            <IconButton
              onClick={() => setUndergradIsExpanded(!undergradIsExpanded)}
              aria-label="expand"
              size="small"
            >
              {undergradIsExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          }
        >
        </CardHeader>
        <div style={{ backgroundColor: 'rgba(211,211,211,0.4)'}}>
        <Collapse in={undergradIsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ height: 36, lineHeight: 2 }}>Master of Research in Speech, Language and Cognition (Distinction)</Container>
          </CardContent>
        </Collapse>
        </div>
      </Card>
      <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
        <CardHeader
          title="University College London | 2014-2018"
          action={
            <IconButton
              onClick={() => setMastersIsExpanded(!mastersIsExpanded)}
              aria-label="expand"
              size="small"
            >
              {mastersIsExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          }
        >
        </CardHeader>
        <div style={{ backgroundColor: 'rgba(211,211,211,0.4)'}}>
        <Collapse in={mastersIsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ height: 36, lineHeight: 2 }}>Bachelor of Arts with Honours in Linguistics (Upper Second Class)</Container>
          </CardContent>
        </Collapse>
        </div>
      </Card>
            </h2>
            <h2 className="education">Experience
            <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
        <CardHeader
          title="TechSwitch Bootcamp | Trainee Full Stack Developer | August 2022-October 2022"
          action={
            <IconButton
              onClick={() => setTechSwitchIsExpanded(!techSwitchIsExpanded)}
              aria-label="expand"
              size="small"
            >
              {techSwitchIsExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          }
        >
        </CardHeader>
        <div style={{ backgroundColor: 'rgba(211,211,211,0.4)'}}>
        <Collapse in={techSwitchIsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ height: 36, lineHeight: 2 }}>This is the Card Content Area</Container>
          </CardContent>
        </Collapse>
        </div>
      </Card>
      <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
        <CardHeader
          title="Opus 2 International | Speech-to-Text Editor | February 2020-July 2022"
          action={
            <IconButton
              onClick={() => setOpusIsExpanded(!opusIsExpanded)}
              aria-label="expand"
              size="small"
            >
              {opusIsExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          }
        >
        </CardHeader>
        <div style={{ backgroundColor: 'rgba(211,211,211,0.4)'}}>
        <Collapse in={opusIsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ height: 36, lineHeight: 2 }}>This is the Card Content Area</Container>
          </CardContent>
        </Collapse>
        </div>
      </Card>
      <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
        <CardHeader
          title="Lady Dinah's Cat Emporium | Team Member | March 2019 - February 2020"
          action={
            <IconButton
              onClick={() => setLadyDinahsIsExpanded(!ladyDinahsIsExpanded)}
              aria-label="expand"
              size="small"
            >
              {ladyDinahsIsExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          }
        >
        </CardHeader>
        <div style={{ backgroundColor: 'rgba(211,211,211,0.4)'}}>
        <Collapse in={ladyDinahsIsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container sx={{ height: 36, lineHeight: 2 }}>This is the Card Content Area</Container>
          </CardContent>
        </Collapse>
        </div>
      </Card>
            </h2>

        </div>
    )
}