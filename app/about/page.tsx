import React from "react";
import Image from "next/image";

export default function page() {
  const imageStyle = {
    maxHeight: "66%",
    maxWidth: "66%",
  };
  return (
    <div className="container">
      <h1 className="text-center my-5 text-decoration-underline">About</h1>

      <div className="card my-5 border rounded-3">

        {// eslint-disable-next-line @next/next/no-img-element
        <img
          src="https://placehold.co/600x400?text=PlaceHolder+image&font=Raleway?"
          className="card-img-top mx-auto my-5"
          alt="placeholder image"
          loading="lazy"
          style={imageStyle}
        />}
        <h2 className="card-title mx-3 mt-2 fs-4">
          Some important introduction
        </h2>
        <div className="card-body">
          Lá col fárë rata, óla or erya rotelë nuquéra. Lucië sindar vá hep. Cu
          loc rempa mornië nalanta, lá rauko tanga pel. To cëa sírë nuquéra, árë
          us sundo vëaner. Hui collo amilessë nu.
        </div>
        <div className="card-body">
          Iel mi leuca cotumo, hamba fairë cenda cua cu, en tata naitya tar. Foa
          to salmë úquétima. Varnë amorta liquis an oro, oia nu soron yulma.
          Celë tehto etelotya nor ya, valta métima ambarenya már lú. Óla ta
          lauta armar. Orva ninwa rimpë vi lëo, hlar tuilë queni en sir, lis
          varta racinë anwavë oa.
        </div>
        <div className="card-body">
          Anna cuivië etelotya nór nó, ná vai yávë vandel maquetta. Ya net lindë
          racinë etéraettul. Núta linwelë tellaurë sú mac, caimasan terpellië
          valarauko mac tó, axan sulier tó san. Úvë aryon vandel náhanemnam be.
          Vi col root yára liéva. Uë ela nimba canta, sú vandel elendë avamarwa
          cil.
        </div>
      </div>

      <div className="card my-5">
        <h2 className="card-title fs-4 mx-3 mt-4"> Another important title. </h2>
        <div className="card-body">
          <p>
            I have reset the sensors to scan for frequencies outside the usual
            range. By emitting harmonic vibrations to shatter the lattices. We
            will monitor and adjust the frequency of the resonators. He has this
            ability of instantly interpreting and extrapolating any verbal
            communication he hears. It may be due to the envelope over the
            structure, causing hydrogen-carbon helix patterns throughout. I'm
            comparing the molecular integrity of that bubble against our
            phasers.
          </p>
        </div>
      </div>

      <div className="card my-5">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="fst-italic mb-3">&ldquo;...As I experienced certain sensory input patterns, my mental pathways have been accustomed to them. The input is eventually anticipated, and even missed when absent...&ldquo;</p>
            <footer className="blockquote-footer">
            Lt. Cmdr. Data on his friendship with Tasha Yar.<cite title="Source Title"> Star Trek: The Next Generation</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
