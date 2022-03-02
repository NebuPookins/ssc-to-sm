Webapp that converts StepMania files in the SSC format to the SM format.

Does not handle any gimmicks like "Lifts", "Fake Arrows", etc.

But if there are chart-specific BPM changes and stops, this script is smart enough to split it into multiple SM files.

For example, given `Aces for Aces.ssc`, will generate `Aces for Aces [Easy].sm`, `Aces for Aces [Medium].sm`,
`Aces for Aces [Hard].sm` and `Aces for Aces [Challenge].sm`

# Usage Instruction

There's a running version of the webapp at https://nebupookins.github.io/ssc-to-sm/

When you go to that page, there'll be a blank textbox. Paste the contents of the SSC file there. For example, try pasting the following text into that textbox:

```
#VERSION:0.83;
#TITLE:ACE FOR ACES;
#ARTIST:TAG×U1;
#BANNER:ACE FOR ACES.png;
#BACKGROUND:ACE FOR ACES-bg.png;
#CDTITLE:./CDTitles/DDR A.png;
#MUSIC:ACE FOR ACES.ogg;
#SAMPLESTART:73.655;
#SAMPLELENGTH:15;
#DISPLAYBPM:200;
#BPMS:0=200;

#NOTEDATA:;
#STEPSTYPE:dance-single;
#DIFFICULTY:Beginner;
#METER:4;
#NOTES:
0001
0000
0000
0000
;

#NOTEDATA:;
#STEPSTYPE:dance-single;
#DIFFICULTY:Easy;
#METER:7;
#NOTES:
1000
0001
0010
0001
;

#NOTEDATA:;
#STEPSTYPE:dance-single;
#DIFFICULTY:Medium;
#METER:13;
#BPMS:0=100,20=200,52=825.608,63.875=200,128=100,160=200;
#STOPS:63.875=0.3,200.25=0.3,347=0.3,347.5=0.15,348=0.15,348.5=0.15,349=0.3,349.5=0.45,350=0.3,350.5=0.15,351=0.15,351.5=0.6;
#NOTES:
0010
0100
0001
0000
0100
0000
1001
0000
;

#NOTEDATA:;
#STEPSTYPE:dance-single;
#DIFFICULTY:Hard;
#METER:15;
#BPMS:0=100,20=400,84=800,98=400,226=50,234=100,250=200,293=400,586=600,586.5=400,595.5=100;
#STOPS:96=0.15,289.5=0.3,581=0.375,581.5=0.225,582=0.225,582.5=0.225,586=0.55,589.5=0.225,590=0.225,595.5=1.35;
#DISPLAYBPM:50:400;
#NOTES:
1001
0001
0010
0001
1100
0000
0000
0000
;

#NOTEDATA:;
#STEPSTYPE:dance-single;
#DIFFICULTY:Challenge;
#METER:18;
#BPMS:0=100,1=400,65=800,69=400,71=200,104=400,168=50,176=100,176.5=200,177=400,179=200,179.5=100,180.5=200,181=400,183=200,183.5=100,184.5=200,185=400,187=200,187.5=100,188.5=200,189=400,191=200,191.5=100,192.5=200,193=400,195=200,195.5=100,196.5=200,197=400,199=200,199.5=100,200.5=200,201=400,203=200,203.5=100,204.5=200,205=400,207=200,207.5=100,208=800,224=400,226=200,227=100,228=200,261=400,421=200,451=100,452=400,523=800,527=400,536=800;
#STOPS:0=11.4,71.875=0.3,260=0.9,516=0.3,517=0.15,518=0.15,519=0.15,527=0.15,529=0.15,530=0.15,531=0.15,532=0.15;
#DISPLAYBPM:50:400;
#NOTES:
0000
0010
1000
0001
;
```
