<script lang="ts">
    import CommitteeCard from '$lib/components/about/CommitteeCard.svelte';

    const committeeMembers = [
        { photo: '/img/committee/president.jpg', name: 'Coy Zhu', title: 'President', email: 'tces-president@srcf.net' },
        { photo: '/img/committee/vice_president.jpg', name: 'Minsuk Lee', title: 'Vice President', email: 'tces-vicepresident@srcf.net' },
        { photo: '/img/committee/webmaster.jpg', name: 'Galen Lee', title: 'Webmaster', email: 'tces-webmaster@srcf.net' },
        { photo: '/img/committee/secretary.jpg', name: 'George Moger-Taylor', title: 'Secretary', email: 'tces-secretary@srcf.net' },
        { photo: '/img/committee/treasurer.jpg', name: 'Milad Aman', title: 'Treasurer', email: 'tces-treasurer@srcf.net' },
        { photo: '/img/committee/events_1.jpg', name: 'Kristina Barani', title: 'Events Officer', email: 'tces-events@srcf.net' },
        { photo: '/img/committee/events_2.jpg', name: 'Juliette Gregg', title: 'Events Officer', email: 'tces-events@srcf.net' },
        { photo: '/img/committee/publicity.jpg', name: 'Ho Yi Yip', title: 'Publicity Officer', email: 'tces-publicity@srcf.net' },
        { photo: '/img/committee/grad_1.jpg', name: 'Rares Grozavescu', title: 'Graduates\' Representative', email: 'tces-graduates-rep@srcf.net' },
        { photo: '/img/committee/grad_2.jpg', name: 'Amy Gibbon', title: 'Graduates\' Representative', email: 'tces-graduates-rep@srcf.net' },
        { photo: '/img/committee/freshers_rep.jpg', name: 'Will Whitton', title: 'Freshers\' Representative', email: 'tces-freshers-rep@srcf.net' }
    ];
</script>

<svelte:head>
  <title>About TCES - Trinity College Engineering Society</title>
  <meta name="description" content="Learn more about the Trinity College Engineering Society (TCES), our mission, sponsors, and committee members." />
</svelte:head>

<header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">About TCES</h1>
    
            <p class="mt-1.5 text-sm text-gray-500">
                Founded in 1997, TCES is one of Trinity’s largest and longest-standing academic societies, uniting engineers across the college.
            </p>
            <p class="mt-1.5 text-sm text-gray-500">
                TCES fosters intellectual engagement and community in engineering through talks, socials, formals, and trips.
                <br />Membership is free and open to all.
            </p>
            <h1 class="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Our Sponsors</h1>

            <div class="mt-4 flex gap-6 items-center">
                <img src="/img/sponsors/jane_street.png" alt="Jane Street" class="h-12 object-contain" />
                <img src="/img/sponsors/hrt.png" alt="HRT" class="h-12 object-contain" />
            </div>
    
            <h1 class="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Meet the Committee</h1>
    
            <p class="mt-1.5 text-sm text-gray-500">
                Get to know the team behind TCES
            </p>
        </div>
      </div>
    </div>
</header>

<section class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {#each committeeMembers as member}
                <CommitteeCard {member} />
            {/each}
        </div>
    </div>
  </section>