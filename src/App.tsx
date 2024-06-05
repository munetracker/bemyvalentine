"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [name, setName] = useState(""); // State to store the name value

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    if (nameParam) {
      const formattedName = nameParam
        .replace(/-/g, " ") // Replace hyphens with spaces
        .split(" ") // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" "); // Join the words back together
      setName(formattedName);
      document.title = `${formattedName} Be my Valentine?`;
    } else {
      document.title = "Will you be my Valentine?";
    }
  }, []);

  const yesButtonSize = 16 + noCount * 2;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Reconsider your answer, please?",
      "More discussion could help?",
      "Change your mind, perhaps?",
      "Give another chance, maybe?",
      "Think overnight and decide?",
      "Try again tomorrow, perhaps?",
      "Later revisit this conversation, okay?",
      "Reason for saying no?",
      "Open to discussing concerns, maybe?",
      "Address doubts or fears?",
      "Willing to hear me out?",
      "What might make you say yes?",
      "Let me know if changes?",
      "Conditions for saying yes?",
      "Show how much you mean?",
      "Prove my sincerity to you?",
      "Start anew, clean slate?",
      "Let me make it up?",
      "Make you smile, another chance?",
      "Opportunity to win your heart?",
      "Fresh perspective, consider it?",
      "Honest feedback, will you?",
      "What makes you happy, share?",
      "Address any misunderstandings, please?",
      "Find a compromise, together?",
      "Consider my feelings, too?",
      "Find middle ground, together?",
      "Prove myself to you?",
      "Show how much I care?",
      "Demonstrate my love for you?",
      "Impress you, another chance?",
      "See from my point?",
      "Explore this further together?",
      "Give us a chance?",
      "Take things one step?",
      "Earn your trust, please?",
      "Show how much I value?",
      "Be patient with you?",
      "Find joy together, perhaps?",
      "Be there for you, always?",
      "Build something beautiful, together?",
      "Make you happy, opportunity?",
      "Bring a smile, to you?",
      "Be the reason, laughter?",
      "Create memories, together?",
      "Cherish every moment, with you?",
      "Write our love story, together?",
      "Make you feel special, how?",
      "Lift your spirits, together?",
      "Be your shoulder, always?",
      "Make dreams come true, together?",
      "Be your partner, in adventure?",
      "Journey through life, together?",
      "Turn to me, always?",
      "Build a future, with love?",
      "Be your constant companion?",
      "Support you, always?",
      "Be your rock, always?",
      "Create a bond, unbreakable?",
      "Make you feel loved, always?",
      "Start anew, with hope?",
      "Prove my devotion, to you?",
      "See potential, between us?",
      "Make heart skip, a beat?",
      "Turn 'No' into 'Yes'?",
      "Believe in love, together?",
      "Imagine future, together?",
      "Build something beautiful, together?",
      "Turn dreams into reality, together?",
      "Show depths of affection?",
      "Change your mind, please?",
      "Discuss more, together?",
      "Consider again, maybe?",
      "Give chance, once more?",
      "Decide tomorrow, perhaps?",
      "Revisit later, reconsider then?",
      "Explain your reason, please?",
      "Share concerns, openly?",
      "Address doubts, let's talk?",
      "Listen to me, please?",
      "What makes you happy?",
      "Clarify misunderstandings, maybe?",
      "Find common ground, together?",
      "Consider my feelings, please?",
      "Meet halfway, together?",
      "Reaffirm my commitment, perhaps?",
      "Express love, in action?",
      "Show affection, genuinely?",
      "Win your heart, once more?",
      "Think from my view?",
      "Explore further, together?",
      "Give us a shot?",
      "Move forward, gradually?",
      "Earn trust, together?",
      "Value you, genuinely?",
      "Show patience, together?",
      "Seek joy, together?",
      "Be your support, always?",
      "Build future, together?",
      "Stay by your side, always?",
      "Be your strength, always?",
      "Form unbreakable bond?",
      "Make you feel cherished?"
    ];
  

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO !!! I Love You {name} !!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">{ name } will You be My Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}