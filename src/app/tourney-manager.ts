export class TourneyManager{
    private static tournamentSlug = '';
    
    // events
    public static onTournamentChanged?: (tourneySlug: string) => void;

    /** Sets the current tournament using a slug and notifies listeners.
     * @param newTourneySlug the slug of the newly set tournament.
     */
    public static setTourney(newTourneySlug: string)
    {
        // return if we already have this as the slug
        if(newTourneySlug == this.tournamentSlug)
        {
            return;
        }

        // otherwise we will change the tournament slug
        this.tournamentSlug = newTourneySlug;
        console.log("Updated tournament  to:", newTourneySlug);

        // We will notify the event
        if(this.onTournamentChanged)
        {
            this.onTournamentChanged(newTourneySlug);   
        }
    }
}