interface Programe {
    fixtures: Fixture;
}

interface Fixture {
    league_name: string;
    datetime: string;
    id_home: string;
    id_away: string;
    fnth_home: string;
    fnth_away: string;
    snth_home: string;
    snth_away: string;
    logo_home: string;
    logo_away: string;
    score_home: string;
    score_away: string;
    match_status: string;
    match_day: string;
    match_week: string;
    overview_url: string;
}