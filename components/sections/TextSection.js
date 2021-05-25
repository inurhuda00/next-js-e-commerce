import { PortableText } from "../../utils/sanity";

function TextSection(props) {
  const { heading, label } = props;
  return (
    <div>
      <div className="container mx-auto px-6">
        {heading && (
          <div className="text-lg md:flex md:items-center font-medium">
            heading
          </div>
        )}

        {label && (
          <div className="md:flex md:items-center font-thin">label</div>
        )}
      </div>
    </div>
  );
}

export default TextSection;
