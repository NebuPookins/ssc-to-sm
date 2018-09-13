Converts StepMania files in the SSC format to the SM format.

Does not handle any gimmicks like "Lifts", "Fake Arrows", etc.

But if there are chart-specific BPM changes and stops, this script is smart enough to split it into multiple SM files.

For example, give `Aces for Aces.ssc`, will generate `Aces for Aces [Easy].sm`, `Aces for Aces [Medium].sm`,
`Aces for Aces [Hard].sm` and `Aces for Aces [Challenge].sm`