(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{607:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("🔥  Download the FREE Azure Developer Guide eBook "),s("a",{attrs:{href:"http://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/speech-service/text-to-speech?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Neural Text-to-speech?"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("💡 Checkout "),s("a",{attrs:{href:"https://azure.microsoft.com/en-us/overview/ai-platform/dev-resources/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AI resources for developers"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://youtu.be/dl0amatX5zs?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Neural Text to Speech in Azure"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"how-to-get-started-with-neural-text-to-speech-in-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-started-with-neural-text-to-speech-in-azure"}},[e._v("#")]),e._v(" How to get started with Neural Text to Speech in Azure")]),e._v(" "),s("h4",{attrs:{id:"synthesize-text-to-speech-with-in-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synthesize-text-to-speech-with-in-azure"}},[e._v("#")]),e._v(" Synthesize text to speech with in Azure")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/text-to-speech/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Neural Text-to-Speech"),s("OutboundLink")],1),e._v(" is part of the "),s("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services family"),s("OutboundLink")],1),e._v(". You can use it to synthesize text into natural human speech. You can translate text into speech in more than "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/speech-service/language-support#text-to-speech?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("54 languages and locales"),s("OutboundLink")],1),e._v(" with a growing list of 129 neural voices.")]),e._v(" "),s("p",[e._v("In this post, we'll create a simple application that can turn text into speech.")]),e._v(" "),s("h4",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),s("ul",[s("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),s("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),s("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),s("li",[e._v("The latest version of "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://code.visualstudio.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),s("OutboundLink")],1),e._v(". This post uses Visual Studio, and you can also use VS Code to accomplish the same result.")])]),e._v(" "),s("h4",{attrs:{id:"use-the-text-to-speech-service-in-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-text-to-speech-service-in-azure"}},[e._v("#")]),e._v(" Use the Text-To-Speech service in Azure")]),e._v(" "),s("p",[e._v("To start turning text into speech, we need to create an Azure Cognitive Service Speech service. We'll do that in the Azure portal.")]),e._v(" "),s("ol",[s("li",[e._v("Click the "),s("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),s("li",[e._v("Search for "),s("strong",[e._v("speech")]),e._v(', select the "Speech" result and click '),s("strong",[e._v("Create")]),e._v(" "),s("ol",[s("li",[e._v("This brings you to the "),s("strong",[e._v("Create Speech")]),e._v(" blade")]),e._v(" "),s("li",[e._v("Fill in a "),s("strong",[e._v("Name")]),e._v(" for the speech service")]),e._v(" "),s("li",[e._v("Pick a "),s("strong",[e._v("Location")])]),e._v(" "),s("li",[e._v("Select a "),s("strong",[e._v("Pricing Tier")]),e._v(". The free tier is fine for this demo")]),e._v(" "),s("li",[e._v("Finally, select a "),s("strong",[e._v("Resource Group")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Create")]),e._v(" to create the speech service")])])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/105createspeech.png"),width:"50%"}}),e._v(" "),s("p",[e._v("(Create Speech service blade in the Azure portal)")]),e._v(" "),s("p",[e._v("When the speech service is created, navigate to it to see its access keys. You'll need "),s("strong",[e._v("one of the access keys")]),e._v(" and the "),s("strong",[e._v("location")]),e._v(" to use the service in an application.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/105keys.png")}}),e._v(" "),s("p",[e._v("(Speech service access keys in the Azure portal)")]),e._v(" "),s("p",[e._v("Let's use the speech service in an application that we'll create with Visual Studio.")]),e._v(" "),s("ol",[s("li",[e._v("Open Visual Studio")]),e._v(" "),s("li",[e._v("Create a new Console application by navigating to "),s("strong",[e._v("File > New > Project")]),e._v(" and selecting "),s("strong",[e._v("Console Application")])]),e._v(" "),s("li",[e._v("The first thing that we need to do, is to reference a NuGet package to work with the Speech service. Right-click the project file and select "),s("strong",[e._v("Manage NuGet Packages")])]),e._v(" "),s("li",[e._v("Find the package "),s("strong",[e._v("Microsoft.CognitiveServices.Speech")]),e._v(" and install it")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/105nuget.png"),width:"50%"}}),e._v(" "),s("p",[e._v("(Speech NuGet package in Visual Studio)")]),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("Next, create the code in the "),s("strong",[e._v("Program.cs")]),e._v(" file. The file should look like this:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('using Microsoft.CognitiveServices.Speech;\nusing Microsoft.CognitiveServices.Speech.Audio;\nusing System.Threading.Tasks;\n\nnamespace TextToSpeech\n{\n    class Program\n    {\n        static async Task Main()\n        {\n            await SynthesizeAudioAsync();\n        }\n\n        static async Task SynthesizeAudioAsync()\n        {\n            var config = SpeechConfig.FromSubscription("servicekey", "servicelocation");\n\n            using var synthesizer = new SpeechSynthesizer(config, audioConfig);\n            \n            await synthesizer.SpeakTextAsync("Synthesizing directly to speaker output.");\n        }\n    }\n}\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br")])]),s("p",[e._v("In the "),s("strong",[e._v("SynthesizeAudioAsync")]),e._v(" method, the first thing that happens is that a "),s("strong",[e._v("SpeechConfig")]),e._v(" is created using the access key and the service location. Leaving the config variable as it is, it is passed to a new "),s("strong",[e._v("SpeechSynthesizer")]),e._v(", which is used to turn text into speech")]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[e._v("Run the code to see if it works. It should output the text synthesizing directly to speaker output from your default audio output device")]),e._v(" "),s("li",[e._v("By default, the service detects the language of the text and uses the default synthesizer voice for it. In this case, it detects the language as en-US and will use the default voice for output. You can change the language that it uses to analyze the text, although the default detection works very good. You can also "),s("strong",[e._v("change the output voice")]),e._v(" by using the "),s("strong",[e._v("config")]),e._v(" variable and passing that to the "),s("strong",[e._v("SpeechSynthesizer")]),e._v(", like in the example below:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('        var config = SpeechConfig.FromSubscription("servicekey", "servicelocation");\n        config.SpeechSynthesisVoiceName = "en-GB-RyanNeural";\n        \n        using var synthesizer = new SpeechSynthesizer(config, audioConfig);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ol",{attrs:{start:"8"}},[s("li",[e._v("Instead of outputting the voice to the default audio output, you can also output the audio to a memory stream or to a file. For instance, to a .wav file, like in the example below:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('        var config = SpeechConfig.FromSubscription("servicekey", "servicelocation");\n        AudioConfig audioConfig = AudioConfig.FromWavFileOutput("c:/audio.wav");\n\n        using var synthesizer = new SpeechSynthesizer(config, audioConfig);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/text-to-speech/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Neural Text-to-Speech"),s("OutboundLink")],1),e._v(" service enables you to convert text to lifelike speech which is close to human-parity. Go and check it out!")])])}),[],!1,null,null,null);t.default=r.exports}}]);