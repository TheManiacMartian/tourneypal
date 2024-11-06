export class TourneyManager{
    private static tournamentSlug = '';
    private static eventSlug = '';
    private static phaseId = '';
    
    // events
    public static onTournamentChanged?: (tourneySlug: string) => void;
    public static onEventChanged?: (eventSlug: string) => void;
    public static onPhaseChanged?: (phaseId: string) => void;

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
        console.log("Updated tournament to:", newTourneySlug);

        // We will notify the event
        if(this.onTournamentChanged)
        {
            this.onTournamentChanged(newTourneySlug);   
        }
    }

    /** Sets the current event using a slug and notifies listeners.
     * @param newEventSlug the slug of the newly set event.
     */
    public static setEvent(newEventSlug: string)
    {
        // return if we already have this as the slug
        if(newEventSlug == this.eventSlug)
        {
            return;
        }

        // otherwise we will change the event slug
        this.eventSlug = newEventSlug;
        console.log("Updated event to:", newEventSlug);

        // We will notify the event
        if(this.onEventChanged)
        {
            this.onEventChanged(newEventSlug);   
        }
    }

    /** Sets the current phase using an id and notifies listeners.
     * @param newPhaseId the id of the newly set phase.
     */
    public static setPhase(newPhaseId: string)
    {
        // return if we already have this as the id
        if(newPhaseId == this.phaseId)
        {
            return;
        }

        // otherwise we will change the phase id
        this.phaseId = newPhaseId;
        console.log("Updated event to:", this.phaseId);

        // We will notify the event
        if(this.onPhaseChanged)
        {
            this.onPhaseChanged(newPhaseId);   
        }
    }

    public static getEventSlug()
    {
        return this.eventSlug;
    }

    public static getPhaseId()
    {
        return this.phaseId;
    }
}